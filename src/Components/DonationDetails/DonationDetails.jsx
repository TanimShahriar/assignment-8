import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donationDetails.find(donation => donation.id == idInt);
  console.log(id, donation);

  const notify = () => {
    toast("Successfully contributed !!");

  }

  return (
    <div>
      <div className="container mx-auto rounded-lg mt-3 p-4">
        <img className='w-full h-[650px]' src={donation.image_detail} alt="" />
        <h2 className=" mt-8 text-4xl font-bold"> {donation.title}</h2> <br />
        <h2 className="text-md mt-2">{donation.details}</h2> <br />
        <button onClick={notify} className="px-3 bg-[#FF444A] mt-4 absolute bottom-48 left-60 py-2 text-lg font-medium text-white rounded-md ">Donate $290</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;