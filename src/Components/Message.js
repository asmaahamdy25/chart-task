import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

const Message = ({ severity, children }) => {
  return <Alert severity={severity}>{children}</Alert>

}

Message.defaultProps = {
  severity: 'info',
}
export default Message