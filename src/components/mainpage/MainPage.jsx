import { useState } from "react"
import {SUBSCRIPTIONPLAN_CONTENT} from "../../constants/subscriptionplan-content"

const MainPage = () => {
const [subscriptionType, setSubscriptionType] = useState(false)
const currentPlan = subscriptionType ? 'annually' : 'monthly';

    return  <section>
    <h1>Our Pricing</h1>
    <div>
        <span>Annually</span>
        <label htmlFor="toggle"></label>
        <input type="checkbox" 
        id="toggle" 
        onChange={() => setSubscriptionType(!subscriptionType)}/>
        <span>Monthly</span>
    </div>

    <div>
        {SUBSCRIPTIONPLAN_CONTENT[currentPlan].map((plan) => (
          <div key={plan.type}>
            <h3>{plan.type}</h3>
            <h2>{plan.price}</h2>
            <p>{plan.storage}</p>
            <p>{plan.users}</p>
            <p>{plan.sendUp}</p>
            <button>LEARN MORE</button>
          </div>
        ))}
      </div>
    </section>
}

export default MainPage