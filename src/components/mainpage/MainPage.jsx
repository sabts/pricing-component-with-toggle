import { useState } from "react"
import {SUBSCRIPTIONPLAN_CONTENT} from "../../constants/subscriptionplan-content"
import { StyledLabel, StyledSection,  HiddenCheckbox } from "./mainpage-styles";

const MainPage = () => {
const [subscriptionType, setSubscriptionType] = useState(false)
const currentPlan = subscriptionType ? 'annually' : 'monthly';

    return  <StyledSection>
    <h1>Our Pricing</h1>
    <div>
        <span>Annually</span>
        <HiddenCheckbox
          id="toggle"
          type="checkbox"
          checked={subscriptionType}
          onChange={() => setSubscriptionType(!subscriptionType)}
        />
        <StyledLabel htmlFor="toggle" $checked={subscriptionType} />
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
      </StyledSection>
}

export default MainPage