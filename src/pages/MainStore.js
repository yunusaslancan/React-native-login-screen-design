import { observable, action } from "mobx";

class MainStore 
{
    @observable name = 'yunus aslancan';

    @action getName(){
        return this.name;
    }
}


export default new MainStore();