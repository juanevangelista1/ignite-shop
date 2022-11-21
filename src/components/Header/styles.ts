import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    marginLeft: "auto",
  },

  span: {
    textDecoration: 'none',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$green300',
    marginLeft: "1rem",
  }
}); 