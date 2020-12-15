import React, {useState} from 'react'
import { peopleData } from "../peopleData";

function BirthdayList (){
    const [people, setPeople] = useState(peopleData);
    const birthdaysToday = 5
    const [birthdays, setBirthdays] = useState(birthdaysToday);
    const clickHandler = () =>{
      setPeople([])
      birthdayReset()
    }
  
    const birthdayReset = () =>{
      setBirthdays(0)
    }

    return (
      <>
        <main>
          <section className="container">
            <h3>{birthdays} birthdays today</h3>
            {people.map((person) => {
              const { id, name, age, image } = person;
              return (
                <article className="person" key={id}>
                  <img src={image} alt="" />
                  <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                  </div>
                </article>
              );
            })}
            <button onClick={clickHandler}>Clear All</button>
          </section>
        </main>
      </>
    );
}



export default BirthdayList





  