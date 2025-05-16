import { useState } from "react"
import {SUBSCRIPTIONPLAN_CONTENT} from "../../constants/subscriptionplan-content"
import { StyledLabel, StyledSection,  HiddenCheckbox, StyledSubscriptionMode, StyleHeader, StyledH1, StyledCard, StyledText, StyledButton } from "./mainpage-styles";

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
            <StyledText size="medium" $type={plan.type}>{plan.type}</StyledText>
      <StyledText size="extraLarge" $type={plan.type}>{plan.price}</StyledText>
      <StyledText size="small" $type={plan.type}>{plan.storage}</StyledText>
      <StyledText size="small" $type={plan.type}>{plan.users}</StyledText>
      <StyledText size="small" $type={plan.type}>{plan.sendUp}</StyledText>
      <StyledButton size="extraSmall" $type={plan.type}>LEARN MORE</StyledButton>
            </StyledCard>
        ))}
      </div>
      </StyledSection>
}

export default MainPage