import React , {useState } from "react";
import Chart from 'react-apexcharts'
// import { useNavigate } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";





export default function ChartDashboard(){
    // const navigate = useNavigate();
    const [employeeName,setEmployeeName] =useState(""); 
    const [employeeId,setEmployeeId]= useState(0);
    const[isTrue,setIsTrue] = useState(false);
    const [inputText,setInputText]= useState("");
    const [employeeHrs,setEmployeeHrs]= useState([]);
    const [data,setData] = useState([{
        name: "Employee-1",
        data: [5,3,3,4,3]
       
    },
    {
        name: "Employee-2",
        data: [3,6,5,4,3]
    },
    {
        name: "Employee-3",
        data: [3,2,7,6,5]
    },
    {
        name: "Employee-4",
        data: [3,2,3,4,5]
    },
    {
        name: "Employee-5",
        data: [5,6,5,4,3]
    }]);
   
    // console.log(inputText);
    function handleChanges(event){
            
            setInputText(event.target.value);
            
        }

        function handleClick(event){
            event.preventDefault();
            setEmployeeHrs(prevValue =>{
                return [ ...prevValue, inputText ];
            });
            setInputText("") ;
            
        }
        console.log(employeeHrs);
        function startOver(event){
            setEmployeeHrs([]);
            event.preventDefault();
        }
        function updateChart(event){
            
                // console.log(data[employeeId].data);
            
                // (data[employeeId].data).splice(0,5);
            
                // for( const i of employeeHrs){
                //         (data[employeeId].data).push(i);
                //     }
           
                //     console.log(data[employeeId].data);
                
            const newData = { name: {employeeId}, data: {employeeHrs} }
            setData(prevValue => {
                return [ [newData] , {...prevValue}] 
            })

            event.preventDefault();
        }
        function displayDetails(){
            setIsTrue(true);
        }


    return(
        <>
        <div className="App">
        <header className="App-header">
        <Chart
        id="employee"
        type="bar"
        width={600}
        height={600}
        series={data}

        options={{
            colors: ["#000fff","#ddd000","#00ff00","#d43e00","#cd3657"],
            theme: {
                mode: "dark"
            },
            chart: {
                stacked: true,
                background:"#0d0d00",
                events: {
                    click: function(event ,charContext, config){
                        // console.log(event);
                        // console.log(charContext);
            //             console.log(config.config.series[config.seriesIndex]);
            setEmployeeName(config.config.series[config.seriesIndex].name);
            setEmployeeId(config.seriesIndex);
            displayDetails();
                        window.scrollTo(750, 750);

                    }
                }
            },
            plotOptions:{
                bar:{
                borderRadius:10,
                columnWidth:40,
                dataLabels:{
                    orientation:"vertical"
                }
                }
            } ,
            tooltip:{
                followCursor: true
            },
            dataLabels:{
                formatter:(val)=> {
                    return ` ${val} hrs`
                },
                style:{
                    colors: ["#fff","#000"],
                    fontSize:14
                }
            },
            xaxis: {
                tickPlacement:'on',
                categories:["Monday","Tuesday","Wednesday","Thursday","Friday"],
                style:{
                    color:"#fff000"
                },
                title:{
                    text:"Work Days",
                    style:{
                        color:"#fff000"
                    }
                }
            },
            yaxis:{
                labels:{
                formatter:(val)=> {
                    return ` ${val} hrs`
                },
                style:{
                    colors: "#fff"
                }
                },
                title:{
                    text:"Total Hours",
                    style:{
                        color:"#fff000"
                    }
                }
            },
            legend:{
                show:true,
                position:'bottom'
            },
            title:{
                text:"Bar Chart",
                style:{
                    fontSize:30
                }
            },
            subtitle:{
                text:"This chart shows hours clocked each day by a particular employee.",
                style:{
                    color:"#808080"
                }
            },
            grid:{
                borderColor:"#808080"
            }
        }}
        >
        </Chart>
        <form>
        <input onChange={handleChanges} type="text" name="Employee-1" value={inputText} />
        <button onClick={handleClick} type="submit">Submit</button>
        <button onClick={startOver} type="submit">Clear</button>
        <button onClick={updateChart} type="submit">Update</button>
        </form>
        </header>
        <br /><br />
        { isTrue && <EmployeeDetails id={employeeId} />} 
        </div>
        </>
    );
}