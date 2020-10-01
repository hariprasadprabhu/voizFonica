export class Mailinfo {
    from :string;
    to:string;
    subject:string;
    name:string;
    
    constructor(){

    }
    setName(name:string)
    {
        this.name=name;
    }
    setSubject(subject:string)
    {
        this.subject=subject;
    }
    setTo(to:string)
    {
        this.to=to;
    }
    setFrom(from:string)
    {
        this.from=from;
    }
}
