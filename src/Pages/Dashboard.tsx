import {
  HiTrendingDown,
  HiTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";
import { MdAccountBalance, MdQueryStats } from "react-icons/md";
import { BarChart, DoughnutChart } from "../components/Charts";
import Table from "../components/DashboardTable";
import data from "../assets/data.json";

export default function Dashboard() {
  return (
    <div >
      <section className="widget-container">
        <WidgetItem
          percent={40}
          amount={true}
          value={340000}
          heading="Earnings"
          icon={
            <HiOutlineCurrencyDollar
              color="rgba(83, 208, 63, 0.85)"
              fontSize="5em"
            />
          }
        />
        <WidgetItem
          percent={-9}
          amount={true}
          value={4000}
          heading="Orders"
          icon={
            <HiOutlineShoppingCart
              color="rgba(165, 201, 214, 0.85)"
              fontSize="5em"
            />
          }
        />
        <WidgetItem
          percent={80}
          amount={true}
          value={23000}
          heading="Balance"
          icon={<MdAccountBalance color="darkgray" fontSize="5em" />}
        />
        <WidgetItem
          percent={30}
          amount={true}
          value={10000}
          heading="Total Sales"
          icon={<MdQueryStats color="purple" fontSize="5em" />}
        />
      </section>
      <section className="graph-container">
        <div className="revenue-chart">
          <h2>Revenue</h2>
          {/* graph chart */}
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Revenue"
            bgColor_1="rgb(0,115,255)"
          />
        </div>
        <div className="pie-chart">
          <h2>Customer Ratio</h2>
          <DoughnutChart
            labels={["Old", "New"]}
            data={[12, 19]}
            backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
            cutout={90}
          />
        </div>
      </section>

      <section className="bottom-table">
        <div className="table-box">
          <div className="table-header">
            <div className="table-name-font">
              <p>Products Data</p>
            </div>
            <div className="search-field-head-bar">
              <p className="search-field-icon">
                <HiOutlineSearch />
              </p>
              <input
                type="text"
                className="search-field"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="table-data">
          <Table data={data.transaction} />
          </div>
        </div>
      </section>
    </div>
  );
}
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  icon: undefined;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  icon,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{""}
          <p className="month">this month</p>
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}% <p className="month">this month</p>
        </span>
      )}
    </div>
    <div className="widget-img">
      <span>{icon}</span>
    </div>
  </article>
);
