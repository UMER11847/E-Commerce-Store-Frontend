// Conponents
import { Card } from "@mui/material"
// Styling
import "./scss/FormCard.scss"

const FormCard = ({ children, style }) => {
  return (
    <Card className="form-card" style={style} variant="outlined">
        {children}
    </Card>
  )
}

export default FormCard