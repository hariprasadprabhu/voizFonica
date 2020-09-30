export class Activeplans {
    phone_num:number;
    plan_id:number;
    ddate:Date
    constructor()
    {
        
    }
    setphone_num(num){
       this.phone_num=num; 
    }
    setplan_id(id){
        this.plan_id=id;
    }
    setddate(date)
    {
        this.ddate=date;
    }
}
