import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from '../../Utility/LocalStorage';

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donationDetails.find(donation => donation.id == idInt);
  console.log(id, donation);

  const notify = () => {
    saveDonation(idInt);
    toast("Successfully contributed !!");

  }

  return (
    <div>
      <div className="container mx-auto rounded-lg mt-3 p-4">
        <img className='w-full h-[650px]' src={donation.image_detail} alt="" />
        <h2 className=" mt-8 text-4xl font-bold"> {donation.title}</h2> <br />
        <h2 className="text-md mt-2">{donation.details}</h2> <br />

      </div>
      <div>
        <svg className='absolute bottom-[156px] left-[200px]' width="1320" height="130" viewBox="0 0 1320 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1320V122C1320 126.418 1316.42 130 1312 130H7.99999C3.58171 130 0 126.418 0 122V0Z" fill="#0B0B0B" fill-opacity="0.5" />
        </svg>
        <button onClick={notify} className="px-3 bg-[#FF444A] mt-4 absolute bottom-48 left-60 py-2 text-lg font-medium text-white rounded-md ">Donate ${donation.donation_amount}</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;