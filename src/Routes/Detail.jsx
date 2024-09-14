import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const { state } = useContext(ContextGlobal);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        setDentist(info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`${state.theme} detail_container`}>
      <h1>Detail Dentist {params.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
