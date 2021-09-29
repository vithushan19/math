import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { BakersRackB } from "../components/bakery/BakersRackB";
import { RootState } from "./rootReducer";

export interface BakersRackBState{
    piePlusBread:string;
    piePlusBreadNum:any;
    piePlusBreadDen:any;
    cupPlusCook: string;
    cupPlusCookNum:any;
    cupPlusCookDen:any;
    browPlusCake:string;
    browPlusCakeNum:any;
    browPlusCakeDen:any;
    piePlusCook: string;
    piePlusCookNum: any;
    piePlusCookDen: any;
    cookMinCake:String;
    cookMinCakeNum:any;
    cookMinCakeDen:any;
    /*browMinBread:string;
    browMinBreadNum:any;
    browMinBreadDen:any;
    cupMinPie: string;
    cupMinPieNum:any;
    cupMinPieDen:any;
    breadMinCake:string;
    breadMinCakeNum:any;
    breadMinCakeDen:any;*/


}

/*const isPieBreadValid = (state: BakersRackBState) => {
    state.piePlusBreadDen / state.piePlusBreadNum === 3/21
}*/

const initialState: BakersRackBState={
    piePlusBread: "",
    piePlusBreadNum: "",
    piePlusBreadDen:"",
    cupPlusCook: "",
    cupPlusCookNum: "",
    cupPlusCookDen:"",
    browPlusCake:"",
    browPlusCakeNum:"",
    browPlusCakeDen:"",
    piePlusCook: "",
    piePlusCookNum: "",
    piePlusCookDen: "",
    cookMinCake: "",
    cookMinCakeNum:"",
    cookMinCakeDen:"",
    /*browMinBread:"",
    browMinBreadNum:"",
    browMinBreadDen:"",
    cupMinPie: "",
    cupMinPieNum: "",
    cupMinPieDen: "",
    breadMinCake:"",
    breadMinCakeNum:"",
    breadMinCakeDen:"",*/


};

export const bakersRackBSlice: Slice = createSlice({
    name:"bakersRackB",
    initialState,
    reducers:{
        setPiePlusBread:(state: BakersRackBState,action: PayloadAction<string>) =>{
           if(action.type == "bakersRackB/setPiePlusBread"){
               const newPiePlusBread = action.payload as string; 
               state.piePlusBread = newPiePlusBread;
           }
        },
        setPiePlusBreadNum:(state: BakersRackBState,action:PayloadAction<Array<any>>) =>{
            if(action.type == "bakersRackB/setPiePlusBreadNum"){
                const newPiePlusBreadNum = action.payload as any;
                state.piePlusBreadNum = newPiePlusBreadNum;
            }
        },
        setPiePlusBreadDen:(state: BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type== "bakersRackB/setPiePlusBreadDen"){
                const newPiePlusBreadDen = action.payload as any;
                state.piePlusBreadDen  = newPiePlusBreadDen;
            }
        },
        setCupPlusCook:(state: BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type=="bakersRackB/setCupPlusCook"){
                const newCupPlusCook = action.payload as string;
                state.cupPlusCook = newCupPlusCook;
            }
        },
        setCupPlusCookNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setCupPlusCookNum"){
                const newCupPlusCookNum = action.payload as any;
                state.cupPlusCookNum = newCupPlusCookNum;
            }
        },
        setCupPlusCookDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setCupPlusCookDen"){
                const newCupPlusCookDen = action.payload as any;
                state.cupPlusCookDen = newCupPlusCookDen;
            }
        },
        setBrowPlusCake:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type=="bakersRackB/setBrowPlusCake"){
                const newBrowPlusCake = action.payload as string;
                state.browPlusCake = newBrowPlusCake;
            }
            
        },
        setBrowPlusCakeNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setBrowPlusCakeNum"){
                const newBrowPlusCakeNum = action.payload as any;
                state.browPlusCakeNum = newBrowPlusCakeNum;
            }
        },
        setBrowPlusCakeDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setBrowPlusCakeDen"){
                const newBrowPlusCakeDen = action.payload as any;
                state.browPlusCakeDen = newBrowPlusCakeDen;
            }
        },
        setPiePlusCook:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setPiePlusCook"){
                const newPiePlusCook = action.payload as string;
                state.piePlusCook = newPiePlusCook;
            }
        },
        setPiePlusCookNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setPiePlusCookNum"){
                const newPiePlusCookNum = action.payload as any;
                state.piePlusCookNum = newPiePlusCookNum;
            }
        },
        setPiePlusCookDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setPiePlusCookDen") {
                const newPiePlusCookDen = action.payload as any;
                state.piePlusCookDen = newPiePlusCookDen;
            }
        },
        setCookMinCake:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setCookMinCake"){
                const newCookMinCake = action.payload as string;
                state.cookMinCake = newCookMinCake;
            }
        },
        setCookMinCakeNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setCookMinCakeNum") {
                const newCookMinCakeNum = action.payload as any;
                state.cookMinCakeNum= newCookMinCakeNum;
            }
        },
        setCookMinCakeDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setCookMinCakeDen") {
                const newCookMinCakeDen = action.payload as any;
                state.cookMinCakeDen= newCookMinCakeDen;
            }
        }

    }
})

export const {setPiePlusBread} = bakersRackBSlice.actions;
export const {setPiePlusBreadNum} = bakersRackBSlice.actions;
export const {setPiePlusBreadDen} = bakersRackBSlice.actions;
export const {setCupPlusCook} = bakersRackBSlice.actions;
export const {setCupPlusCookNum} = bakersRackBSlice.actions;
export const {setCupPlusCookDen} = bakersRackBSlice.actions;
export const {setBrowPlusCake}= bakersRackBSlice.actions;
export const {setBrowPlusCakeNum}= bakersRackBSlice.actions;
export const {setBrowPlusCakeDen} = bakersRackBSlice.actions;
export const {setPiePlusCook} = bakersRackBSlice.actions;
export const {setPiePlusCookNum} =bakersRackBSlice.actions;
export const {setPiePlusCookDen} = bakersRackBSlice.actions;
export const {setCookMinCake} = bakersRackBSlice.actions;
export const {setCookMinCakeNum} =bakersRackBSlice.actions;
export const {setCookMinCakeDen} = bakersRackBSlice.actions;


export const bakersRackBSelector = (state:RootState) => state.bakersBRack;
 