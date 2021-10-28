import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameResponse, setUserNameResponse] = useState('');
  const [emailResponse, setEmailResponse] = useState('');


  const getResponse = async () => {
    const response = await axios.post(
      "https://dev.api.abel.fit/azure-dev/dev_v2/clientpayments/Contract/ValidateOrganizationMember",
      { MemberEmail: email, oauthToken: 'vQYnVBO3AkSekQKl2miTDo03yyfIzWQ8', },
    )
    console.log(response);
    setEmailResponse(JSON.stringify(response.data));
  };

  const getUserNameResponse = async () => {
    const response = await axios.post(
      "https://dev.api.abel.fit/azure-dev/dev_v2/api/ValidateUser",
      { UserName: userName },
    )
    console.log(response);
    setUserNameResponse(JSON.stringify(response.data));
  };

  return (<>
    <div style={{
      textAlign: 'center',
      margin: '100px',
    }}>
      <h1> Username Api Test</h1> <br/>
      <input style={{margin: 10}} defaultValue={userName} onChange={(event) => setUserName(event.target.value)} /><br />
      <button style={{margin: 10}} type="button" onClick={getUserNameResponse}>Submit</button>
      <br />
      Response = <p style={{ color: 'green' }}>{ userNameResponse }</p>
    </div>

    <div style={{
      textAlign: 'center',
      margin: '100px',
    }}>
      <h1> Organisation Email Api Test</h1><br />
      <input style={{margin: 10}} defaultValue={email} onChange={(event) => setEmail(event.target.value)} /><br />
      <button style={{margin: 10}} type="button" onClick={getResponse}>Submit</button><br />
      <p style={{ color: 'red' }}> Please check console to get check api response and error </p> <br />
      Response = <p style={{ color: 'green' }}>{emailResponse}</p>
    </div>
  </>
  );
}

export default App;
