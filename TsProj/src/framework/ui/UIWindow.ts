import { UIPanel } from "./UIPanel";
import { UITypeDef, UIComDefs } from "./UIDefine";
import { FairyGUI } from "csharp";




export abstract class  UIWindow extends UIPanel{
   
    public get uiType(): UITypeDef {    
        return UITypeDef.Window;
    }

    private m_btnClose:FairyGUI.GButton;

    public onAwake():void{
        
        this.m_btnClose = this.fui.GetChild(UIComDefs.WindowCloseBtn);

    }

    public onOpen(arg:any):void{
        super.onOpen(arg);

        if(this.m_btnClose!=undefined){
            this.m_btnClose.onClick.Add(this.onBtnClose);
        }
    
    }
    public onClose(arg:any):void{
        super.onClose(arg);

        if(this.m_btnClose!=undefined){
            this.m_btnClose.onClick.Remove(this.onBtnClose);
        }
    }

    private onBtnClose(){
        this.close(0);
    }

}