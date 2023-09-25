import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/LocalStorage";

const Donation = () => {

  const donations = useLoaderData();
  const [appliedDonations, setAppliedDonations] = useState([]);

  useEffect(() => {

    const donationIds = getStoredDonation();
    if (donations.length > 0) {
      const donationsApplied = [];
      for (const id of donationIds) {
        const donation = donations.find(donation => donation.id === id);
        if (donation) {
          donationsApplied.push(donation);
        }
      }
      setAppliedDonations(donationsApplied);
    }

  }, [])


  return (
    <div>
      <h2 className="text-center text-3xl font-medium text-purple-600 mb-4">Donation : {appliedDonations.length}</h2>
      <ul className="container mx-auto grid grid-cols-2 gap-6">
        {
          appliedDonations.map(donation => <div className="container mx-auto mb-5" key={donation.id}>


            <div style={{ backgroundColor: donation.card_bg }} className="card card-side bg-base-100 shadow-xl">
              <figure><img className="h-60 rounded-lg bg-[#F4F4F4]" src={donation.image} alt="Movie" /></figure>
              <div className="card-body">
                <h2 style={{ backgroundColor: donation.category_bg, color: donation.text_color }} className="card-title  w-[40%] px-3 font-medium py-1 rounded-md">{donation.categori}</h2>
                <h2 className="card-title mb-2">{donation.title}</h2>
                <h2 className="card-title mb-4">${donation.donation_amount}.00</h2>
                <div className="card-actions">
                  <button style={{ backgroundColor: donation.text_color }} className="px-4 py-2  bg-purple-700 rounded-md text-white">View Details</button>
                </div>
              </div>
            </div>



          </div>)
        }
      </ul>
    </div>
  );
};

export default Donation;