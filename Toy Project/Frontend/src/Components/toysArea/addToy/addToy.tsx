/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import targetAudienceModel from "../../Models/targetAudienceModel";
import toyModel from "../../Models/toyModel";
import "./addToy.css";

function AddToy(): JSX.Element {

    const history = useHistory();
    const [targetAudience , setTargetAudience] = useState<targetAudienceModel[]> ([]);

    useEffect(() => {
        axios.get<targetAudienceModel[]>("http://localhost:3001/api/targetaudience")
        .then(response => setTargetAudience(response.data))
        .catch(err => console.log(err));});

const {register ,handleSubmit } = useForm<toyModel>()

async function send (toy: toyModel) {
    try {
        toy.toyId =Math.floor(Math.random() * 101);
        const response = await axios.post<toyModel>("http://localhost:3001/api/toys", toy);
        const addedToy = response.data;
        alert("Toy has been added Id " + addedToy.toyId);
        history.push("/toys");
    }
    catch (err) {
        console.log(err)
    }
}
    return (
        <div className="addToy">
			<form onSubmit= {handleSubmit(send)}>

             <label>Toy Name:</label>
             <input type="text" {...register("toyName")} />

             <label>Target Audience:</label>
             <select {...register("targetAudienceName")}>
               <option selected disabled >Select Category</option>
               <option value="111">puzzle</option>
               <option value="222">Vehicles</option>
               <option value="333">Art</option>
               <option value="444">Craft</option> 
                 {targetAudience.map(t => <option key={t.targetAudienceId} value={t.targetAudienceId}>{t.targetAudienceName}</option>)}
             </select>

                
             <label>Description:</label>
             <input type="text"  {...register("description")}/>

             <label>Price:</label>
             <input type="number"  {...register("price")}/>

             <button>Add</button>

            </form>
        </div>
    );
}

export default AddToy;
