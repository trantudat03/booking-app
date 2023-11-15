import { useEffect, useState } from "react";
import PhotosUploader from "./PhotosUploader";
import Perk from "./Perks";

import axios from "axios";
import AccountNav from "./AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
    const {id} = useParams();
    console.log(id);
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);

    

      useEffect(()=>{
            if(!id) {
                return;
            }
            axios.get('/places/'+ id).then(response=> {
                const {data} = response;
                setTitle(data.title);
                setAddress(data.address);
                setAddedPhotos(data.photos);
                setDescription(data.description)
                setPerks(data.perks);
                setExtraInfo(data.extraInfo);
                setCheckIn(data.checkIn);
                setCheckOut(data.checkOut);
                setMaxGuests(data.maxGuests)
            });
      }, [id])

      
    function inputHeader(text) {
        return (
          <h2 className="text-2xl mt-4">{text}</h2>
        );
      }
      function inputDescription(text) {
        return (
          <p className="text-gray-500 text-sm">{text}</p>
        );
      }
      function preInput(header,description) {
        return (
          <>
            {inputHeader(header)}
            {inputDescription(description)}
          </>
        );
      }

      async function addNewPlace(ev) {
        ev.preventDefault();
        
        // eslint-disable-next-line no-unused-vars
        const {data} = await axios.post('/places',{title,address, addedPhotos, description, checkIn, checkOut, perks, extraInfo, maxGuests});
        // setRedirect(true)
        setRedirect(true);
      }

      if(redirect) {
        return (
            <Navigate to={'/account/places'}/>
        )
      }

     

    return (
        <div className="">
            <AccountNav/>
              <form onSubmit={addNewPlace}>
              {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for Ex: my lovely apt"/>
                {preInput('Address', 'Address to this place')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address"/>
                {preInput('Photos','more = better')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                
                {preInput('Description','description of the place')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
                {preInput('Perks','select all the perks of your place')}
                    <Perk selected={perks} onChange={setPerks}/>
                {preInput('Extra info','house rules, etc')}
                <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
                {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')}
                <div className="grid gap-1 sm:grid-cols-3 ">
                    <div>
                        <h3 className="mt-2 mb-1">Check in time</h3>
                        <input type="text" value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)} placeholder="14:00"/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Check out time</h3>
                        <input  type="text" value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)} placeholder="14:00"/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Max number of guests</h3>
                        <input  type="number" value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}/>
                    </div>
                </div>
                <div>
                    <button className="primary my-4">Save</button>
                </div>
              </form>
            </div> 
    )
}