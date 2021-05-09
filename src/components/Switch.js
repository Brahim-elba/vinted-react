import { Switch } from "@material-ui/core";

const SwitchButton = ({ statusSwitch, setStatusSwitch }) => {
  const handleStatusSwitch = () => {
    setStatusSwitch(!statusSwitch);
  };

  return (
    <div>
      <Switch
        checked={statusSwitch}
        onClick={handleStatusSwitch}
        color="primary"
      />
    </div>
  );
};

export default SwitchButton;
