const getStoredDonation = () => {
  const storedDonation = localStorage.getItem('give-donation');
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
}


const saveDonation = id => {
  const storedDonations = getStoredDonation();
  const exists = storedDonations.find(donationId => donationId === id);
  if (!exists) {
    storedDonations.push(id);
    localStorage.setItem('give-donation', JSON.stringify(storedDonations))
  }
}

export { getStoredDonation, saveDonation }