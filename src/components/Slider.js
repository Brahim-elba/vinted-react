import { Slider } from "@material-ui/core";

const SliderRange = ({ valueRange, setValueRange }) => {
  //   const [val, setVal] = useState([50, 130]);

  const updateRange = (event, valRange) => {
    setValueRange(valRange);
  };
  return (
    <div className="slider" style={{ width: "300px", marginLeft: "10px" }}>
      <Slider
        value={valueRange}
        max={150}
        step={10}
        valueLabelDisplay="on"
        onChange={updateRange}
      />
    </div>
  );
};

export default SliderRange;
