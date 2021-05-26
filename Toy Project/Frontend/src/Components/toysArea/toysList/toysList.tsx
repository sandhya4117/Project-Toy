/* eslint-disable react-hooks/rules-of-hooks */


import { Component, useState } from "react";
import "./toysList.css";
import toyModel from "../../Models/toyModel"
import axios from "axios";


interface ToysListState {
	toys: toyModel[],
    category : string
}

class ToysList extends Component<{}, ToysListState> {

    public constructor(props: {}) {
        super(props);
        this.state = { toys: [] ,category : "111"}
       
    }

    public async componentDidMount () {
        try{
            const response = await axios.get<toyModel[]>("http://localhost:3001/api/toys");
            this.setState({ ...this.state, toys: response.data });
        }
        catch (err) {
            console.log(err);
        }
    }

    
    public render(): JSX.Element {
        async function deleteToy (id: number) {
         
            try { 
                    const ok = window.confirm("Are you sure? ");
                    if (!ok) return;
                    // const response = await axios.delete<toyModel>(`http://localhost:3001/api/toysdelete/${id}`);
                    const response = await axios.post<toyModel>("http://localhost:3001/api/toysdelete", {id});
                    alert("Toy has been deleted");
                    window.location.href = "/toys";  
                    
            }
            catch (err) {
                alert("Error " + err)
            }
        }  
        return (
            <div className="toysList">
                <div className ="text_center">
                <h2>Toys List</h2>
                <div className="category_list">
                 <h3>Select Category</h3>	
                  <select value={this.state.category} className="dropdown_list"
                    onChange={(e) => this.setState({ ...this.state,category: e.target.value })}>
                    <option value="111">Puzzles</option>
                    <option value="222">Vehicles</option>
                    <option value="333">Art</option>
                    <option value="444">Craft</option> 
                  </select>
                 </div>
                
             </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.toys.map(t => 
                            <>
                            {t.targetAudienceName===this.state.category ?
                                 <tr key={t.toyId}>
                                 <td>{t.toyName}</td>
                                 <td>{t.description}</td>
                                 <td>{t.price}</td>
                                 <td>
                                 <button type="button" onClick={() => deleteToy(t.toyId)}> Remove </button>
                                 </td>
                             </tr> : null
                            }      
                            </>
                                )}
                        </tbody>
                   


                </table>
            </div>
        );
    }
}

export default ToysList

