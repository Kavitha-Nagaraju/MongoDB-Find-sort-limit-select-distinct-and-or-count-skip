import React, { useEffect, useState } from 'react';

function EmployeeForm() {
    let [data,setData]=useState([]);
    let [countries,setCountries]=useState([]);
    let [departments,setDepartments]=useState([]);
    let [genders,setGenders]=useState([]);
    useEffect(()=>{
        getCountryDataFromServer();
        getDepartmentDataFromServer();
        getGendersDataFromServer();
    },[])
    let getCountryDataFromServer = async()=>{
        let reqOptions={
          method:"GET",
        };
        let JSONData = await fetch("http://localhost:4867/countriesList", reqOptions);
        let JSOCountriesData = await JSONData.json();
        console.log(JSOCountriesData);
        setCountries(JSOCountriesData);
  }
  let getDepartmentDataFromServer = async()=>{
    let reqOptions={
      method:"GET",
    };
    let JSONData = await fetch("http://localhost:4867/departmentsList", reqOptions);
    let JSODepartmentsData = await JSONData.json();
    console.log(JSODepartmentsData);
    setDepartments(JSODepartmentsData);
}
let getGendersDataFromServer = async()=>{
    let reqOptions={
      method:"GET",
    };
    let JSONData = await fetch("http://localhost:4867/gendersList", reqOptions);
    let JSOGendersData = await JSONData.json();
    console.log(JSOGendersData);
    setGenders(JSOGendersData);
}
    let getEmployeeDataFromServer = async()=>{
          let reqOptions={
            method:"GET",
          };
          let JSONData = await fetch("http://localhost:4867/employees", reqOptions);
          let JSOData = await JSONData.json();
          console.log(JSOData);
          setData(JSOData);
    }

    return (
        <div>
            <form>
                <div>
                <div>
                    <label>Country</label>
                    <select>
                       {countries.map((ele,i)=>{
                        return <option>{ele}</option>
                       })}
                    </select>
                    
                </div>
                <div>
                    <label>Department</label>
                    <select>
                        {departments.map((ele,i)=>{
                            return <option>{ele}</option>
                        })}
                    </select>

                </div>
                <div>
                    <label>Department</label>
                    <select>
                        {departments.map((ele,i)=>{
                            return <option>{ele}</option>
                        })}
                    </select>

                </div>
                </div>
                
        
            <button type="button"  onClick={()=>{
    getEmployeeDataFromServer();

   }}>DATA</button>
      <table>
        
        <thead>
          <tr>
            <th>S.no</th>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Emial</th>
            <th>Gender</th>
            <th>ProfilePic</th>
            <th>DepartMent</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
        {data.map((ele,i)=>{
          return (
              <tr>
            <td>{i+1}</td>
            <td>{ele.id}</td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.email}</td>
            <td>{ele.gender}</td>
            <td><img src={ele.profilePic}></img></td>
            <td>{ele.department}</td>
            <td>{ele.age}</td>
            <td>{ele.salary}</td>
            <td>{ele.country}</td>

          </tr>
      )
    })}
        </tbody>
      </table>
      </form>
     
        </div>
    );
}

export default EmployeeForm;
