import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaTimesCircle, FaUsers } from "react-icons/fa";
import SummaryCard from "./SummaryCard";
import { FaMoneyBill1Wave } from "react-icons/fa6";


const AdminSummary = () => {

    return (
        <div className="p-6">
            <h3 className="text 2x1 font-bold "> Dashboard Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <SummaryCard icon={<FaUsers/>} text="Total Employees" number={13} color="bg-teal-600" />
                <SummaryCard icon={<FaBuilding/>} text="Total Departments" number={5} color="bg-yellow-600"/>
                <SummaryCard icon={<FaMoneyBill1Wave/>} text="Monthly Salary" number={600} color="bg-yellow-600"/>
            </div>

            
            <div className="mt-12">
                <h4 className="text-center text-2x1 font-bold">Leave Details </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6" >
                    <SummaryCard icon={<FaFileAlt/>} text="Leave Applied" number={10} color="bg-teal-600"/>
                    <SummaryCard icon={<FaCheckCircle/>} text="Leave Approved" number={3} color="bg-green-600"/>
                    <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number={7} color="bg-yellow-600"/>
                    <SummaryCard icon={<FaTimesCircle/>} text="Leave Rejected" number={0} color="bg-red-600"/>

                </div>
            </div>
        </div>
        
        
    )
}

export default AdminSummary;