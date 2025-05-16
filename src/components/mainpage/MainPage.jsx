import { useState } from "react"
import {SUBSCRIPTIONPLAN_CONTENT} from "../../constants/subscriptionplan-content"
import { StyledLabel, StyledSection,  HiddenCheckbox, StyledSubscriptionMode, StyleHeader, StyledH1, StyledCard } from "./mainpage-styles";

const MainPage = () => {
const [subscriptionType, setSubscriptionType] = useState(false)
const currentPlan = subscriptionType ? 'annually' : 'monthly';

    return  <StyledSection>
        <StyleHeader>
            <StyledH1>
            Our Pricing
            </StyledH1>
        <StyledSubscriptionMode>
        <span>Annually</span>
        <HiddenCheckbox
          id="toggle"
          type="checkbox"
          checked={subscriptionType}
          onChange={() => setSubscriptionType(!subscriptionType)}
        />
        <StyledLabel htmlFor="toggle" $checked={subscriptionType} />
        <span>Monthly</span>
        </StyledSubscriptionMode>
        </StyleHeader>
        
    <div>
        {SUBSCRIPTIONPLAN_CONTENT[currentPlan].map((plan) => (
          <StyledCard key={plan.type} $type={plan.type}>
            <h3>{plan.type}</h3>
            <h2>{plan.price}</h2>
            <p>{plan.storage}</p>
            <p>{plan.users}</p>
            <p>{plan.sendUp}</p>
            <button>LEARN MORE</button>
            </StyledCard>
        ))}
      </div>
      </StyledSection>
}

export default MainPage