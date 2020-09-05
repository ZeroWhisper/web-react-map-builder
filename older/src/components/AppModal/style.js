import { colors } from '~/styles';

export const style = ({ windowWidth, windowHeigth }) => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: windowHeigth || 'auto',
    width: windowWidth || 'auto',
  },
  overlay: {
    backgroundColor: colors.darkTransparent,
  },
});
