import { StyledContainer, StyledTaglineContainer } from "./HomePage.styled";
import { Tagline } from "@/features/tagline";
import { taglineUiStore } from "../srores/ui/taglineUiStore";
import { observer } from "mobx-react-lite";

const HomePage = observer(() => {
  return (
    <StyledContainer>
      <h3>Tagline element</h3>
      <StyledTaglineContainer>
        <Tagline tags={taglineUiStore.tags} />
      </StyledTaglineContainer>
    </StyledContainer>
  );
});

export default HomePage;
