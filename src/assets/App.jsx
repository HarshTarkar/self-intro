import profile from "/profile.jpg";

function App() {

  return (
    <div className='main'>
      <div className='img-flex'>
        <img src={profile} alt="profile" />
      </div>
      <p className='hello'>
        Hello,
      </p>
      <h1>
        I'm Harsh.
      </h1>
      <br/>
      <p>
      BE Graduate.
      </p>
      <br/>
      <p>
      2 years of experience in Software Development. Sound understanding of Javascript, React, Database, and SQL queries.
      </p>
      <br/>
      <p>
        I am currently based in Mumbai, India and looking for a Job.
      </p>
    </div>
  )
}

export default App
