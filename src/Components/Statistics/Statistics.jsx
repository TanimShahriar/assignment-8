import Chart from "react-apexcharts"
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
  const data = useLoaderData();

  const localData = localStorage.getItem('give-donation')
  const donationParse = JSON.parse(localData);

  const donationCard = (donationParse.length);
  const totalCard = data.length;

  const donatedParcentage = (donationCard / totalCard) * 100;

  const totalParcentage = 100 - donatedParcentage;

  console.log(totalCard, donationCard)






  return (
    <div>
      <React.Fragment>
        <div className=" container mx-auto mt-20">

          <Chart
            type="pie"
            width={1300}
            height={550}

            series={[donatedParcentage, totalParcentage]}


            options={{

              colors: ["#00C49F", "#FF444A"],

              labels: ["Your Donation", "Total Donation"]
            }}

          >



          </Chart>


        </div>
      </React.Fragment >
    </div >
  );
};

export default Statistics;