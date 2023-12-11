import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'components/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();

  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      <div style={{ textAlignLast: 'center' }}>
        <Typography sx={{ fontSize: 'xx-large', fontFamily: 'system-ui', fontWeight: 'bolder' }}>FALCON EYE</Typography>
        <Logo />
      </div>
    </ButtonBase>
  );
};

export default LogoSection;
