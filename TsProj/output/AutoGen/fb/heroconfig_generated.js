"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.fb = void 0;
const flatbuffers = require("flatbuffers");
/**
 * @constructor
 */
var fb;
(function (fb) {
    class heroconfigTB {
        constructor() {
            this.bb = null;
            this.bb_pos = 0;
        }
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns heroconfigTB
         */
        __init(i, bb) {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }
        ;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param heroconfigTB= obj
         * @returns heroconfigTB
         */
        static getRootAsheroconfigTB(bb, obj) {
            return (obj || new heroconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        ;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param heroconfigTB= obj
         * @returns heroconfigTB
         */
        static getSizePrefixedRootAsheroconfigTB(bb, obj) {
            bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
            return (obj || new heroconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        ;
        /**
         * @param number index
         * @param fb.heroconfigTR= obj
         * @returns fb.heroconfigTR
         */
        heroconfigTRS(index, obj) {
            var offset = this.bb.__offset(this.bb_pos, 4);
            return offset ? (obj || new fb.heroconfigTR()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        ;
        /**
         * @returns number
         */
        heroconfigTRSLength() {
            var offset = this.bb.__offset(this.bb_pos, 4);
            return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         */
        static startheroconfigTB(builder) {
            builder.startObject(1);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset heroconfigTRSOffset
         */
        static addHeroconfigTRS(builder, heroconfigTRSOffset) {
            builder.addFieldOffset(0, heroconfigTRSOffset, 0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param Array.<flatbuffers.Offset> data
         * @returns flatbuffers.Offset
         */
        static createHeroconfigTRSVector(builder, data) {
            builder.startVector(4, data.length, 4);
            for (var i = data.length - 1; i >= 0; i--) {
                builder.addOffset(data[i]);
            }
            return builder.endVector();
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number numElems
         */
        static startHeroconfigTRSVector(builder, numElems) {
            builder.startVector(4, numElems, 4);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endheroconfigTB(builder) {
            var offset = builder.endObject();
            return offset;
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishheroconfigTBBuffer(builder, offset) {
            builder.finish(offset);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param flatbuffers.Offset offset
         */
        static finishSizePrefixedheroconfigTBBuffer(builder, offset) {
            builder.finish(offset, undefined, true);
        }
        ;
        static createheroconfigTB(builder, heroconfigTRSOffset) {
            heroconfigTB.startheroconfigTB(builder);
            heroconfigTB.addHeroconfigTRS(builder, heroconfigTRSOffset);
            return heroconfigTB.endheroconfigTB(builder);
        }
    }
    fb.heroconfigTB = heroconfigTB;
})(fb = exports.fb || (exports.fb = {}));
/**
 * @constructor
 */
(function (fb) {
    class heroconfigTR {
        constructor() {
            this.bb = null;
            this.bb_pos = 0;
        }
        /**
         * @param number i
         * @param flatbuffers.ByteBuffer bb
         * @returns heroconfigTR
         */
        __init(i, bb) {
            this.bb_pos = i;
            this.bb = bb;
            return this;
        }
        ;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param heroconfigTR= obj
         * @returns heroconfigTR
         */
        static getRootAsheroconfigTR(bb, obj) {
            return (obj || new heroconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        ;
        /**
         * @param flatbuffers.ByteBuffer bb
         * @param heroconfigTR= obj
         * @returns heroconfigTR
         */
        static getSizePrefixedRootAsheroconfigTR(bb, obj) {
            bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
            return (obj || new heroconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        ;
        /**
         * @returns number
         */
        Id() {
            var offset = this.bb.__offset(this.bb_pos, 4);
            return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        ;
        /**
         * @returns number
         */
        Baseatk() {
            var offset = this.bb.__offset(this.bb_pos, 6);
            return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
        }
        ;
        /**
         * @returns number
         */
        Sp() {
            var offset = this.bb.__offset(this.bb_pos, 8);
            return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
        }
        ;
        /**
         * @returns number
         */
        Hp() {
            var offset = this.bb.__offset(this.bb_pos, 10);
            return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
        }
        ;
        /**
         * @returns number
         */
        Attackdistance() {
            var offset = this.bb.__offset(this.bb_pos, 12);
            return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
        }
        ;
        /**
         * @returns number
         */
        Attackinterval() {
            var offset = this.bb.__offset(this.bb_pos, 14);
            return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         */
        static startheroconfigTR(builder) {
            builder.startObject(6);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Id
         */
        static add_id(builder, Id) {
            builder.addFieldInt32(0, Id, 0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Baseatk
         */
        static add_baseatk(builder, Baseatk) {
            builder.addFieldFloat32(1, Baseatk, 0.0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Sp
         */
        static add_sp(builder, Sp) {
            builder.addFieldFloat32(2, Sp, 0.0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Hp
         */
        static add_hp(builder, Hp) {
            builder.addFieldFloat32(3, Hp, 0.0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Attackdistance
         */
        static add_attackdistance(builder, Attackdistance) {
            builder.addFieldFloat32(4, Attackdistance, 0.0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @param number Attackinterval
         */
        static add_attackinterval(builder, Attackinterval) {
            builder.addFieldFloat32(5, Attackinterval, 0.0);
        }
        ;
        /**
         * @param flatbuffers.Builder builder
         * @returns flatbuffers.Offset
         */
        static endheroconfigTR(builder) {
            var offset = builder.endObject();
            return offset;
        }
        ;
        static createheroconfigTR(builder, Id, Baseatk, Sp, Hp, Attackdistance, Attackinterval) {
            heroconfigTR.startheroconfigTR(builder);
            heroconfigTR.add_id(builder, Id);
            heroconfigTR.add_baseatk(builder, Baseatk);
            heroconfigTR.add_sp(builder, Sp);
            heroconfigTR.add_hp(builder, Hp);
            heroconfigTR.add_attackdistance(builder, Attackdistance);
            heroconfigTR.add_attackinterval(builder, Attackinterval);
            return heroconfigTR.endheroconfigTR(builder);
        }
    }
    fb.heroconfigTR = heroconfigTR;
})(fb = exports.fb || (exports.fb = {}));
//# sourceMappingURL=heroconfig_generated.js.map