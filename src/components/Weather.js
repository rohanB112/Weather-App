const Weather = (data) => {
  const { current, location, error } = data.data;

  return error ? (
    <div>
      <h1 className="text-2xl font-bold">OOpsss</h1>
      <h1>Code: {error.code}</h1>
      <h1>{error.message}</h1>
    </div>
  ) : (
    <div>
      <img className="w-24 m-auto" src={current?.condition?.icon} />
      <div className="mt-10">
        <h1 className="text-3xl font-bold">
          {location.name} , {location.region}
        </h1>

        <h2 className="text-lg">Temparature: {current?.temp_c} °C</h2>
        <h2 className="text-lg">Feels like: {current?.feelslike_c} °C</h2>
        <h2 className="text-lg">Humidity: {current?.humidity}</h2>
        <h2 className="text-lg">{current?.condition?.text}</h2>
      </div>
    </div>
  );
};

export default Weather;
