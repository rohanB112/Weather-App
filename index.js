var $2A20x$reactjsxruntime = require("react/jsx-runtime");
var $2A20x$react = require("react");
var $2A20x$reactdomclient = require("react-dom/client");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





const $c63a7df87ddd70d6$export$95244b523a2a97ee = "http://api.weatherapi.com/v1/current.json?key=e0d05bf975df47c081d100110231308&q="; // 86bc3cff60f84313ad4154049230608
 // http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=bulk



const $704ffa637310c9e0$var$Weather = (data)=>{
    const { current: current, location: location, error: error } = data.data;
    return error ? /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "OOpsss"
            }),
            /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("h1", {
                children: [
                    "Code: ",
                    error.code
                ]
            }),
            /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("h1", {
                children: error.message
            })
        ]
    }) : /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("img", {
                className: "w-24 m-auto",
                src: current?.condition?.icon
            }),
            /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("h1", {
                        className: "text-3xl font-bold",
                        children: [
                            location.name,
                            " , ",
                            location.region
                        ]
                    }),
                    /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("h2", {
                        className: "text-lg",
                        children: [
                            "Temparature: ",
                            current?.temp_c,
                            " \xb0C"
                        ]
                    }),
                    /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("h2", {
                        className: "text-lg",
                        children: [
                            "Feels like: ",
                            current?.feelslike_c,
                            " \xb0C"
                        ]
                    }),
                    /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("h2", {
                        className: "text-lg",
                        children: [
                            "Humidity: ",
                            current?.humidity
                        ]
                    }),
                    /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("h2", {
                        className: "text-lg",
                        children: current?.condition?.text
                    })
                ]
            })
        ]
    });
};
var $704ffa637310c9e0$export$2e2bcd8739ae039 = $704ffa637310c9e0$var$Weather;


var $45cff4f2cd950128$exports = {};
$45cff4f2cd950128$exports = new URL("sky.d26769b1.png", "file:" + __filename).toString();


const $889bfb1e3e9bfc80$var$Body = ()=>{
    const [cityName, setCityName] = (0, $2A20x$react.useState)(null);
    const [weatherData, setWeatherData] = (0, $2A20x$react.useState)(null);
    async function fetchData(city) {
        const api_full = (0, $c63a7df87ddd70d6$export$95244b523a2a97ee) + city;
        const data = await fetch(api_full);
        const json = await data.json();
        setWeatherData(json);
    }
    return /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("div", {
        className: "flex justify-center h-screen bg-cover",
        style: {
            backgroundImage: `url(${(0, (/*@__PURE__*/$parcel$interopDefault($45cff4f2cd950128$exports)))})`
        },
        children: /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("div", {
            className: "bg-blue-950 rounded-sm shadow-md m-1 p-6 text-white w-2/5",
            children: [
                /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsxs)("div", {
                    className: "flex justify-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("input", {
                            className: "text-black m-2 h-8 w-2/4 rounded-sm",
                            type: "text",
                            placeholder: "City name",
                            onChange: (e)=>{
                                setCityName(e.target.value);
                            //   console.log(cityName);
                            }
                        }),
                        /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)("button", {
                            className: " m-2 h-8 w-20 rounded-sm bg-green-300",
                            onClick: ()=>{
                                fetchData(cityName);
                            },
                            children: "Search"
                        })
                    ]
                }),
                weatherData == null ? null : /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)((0, $704ffa637310c9e0$export$2e2bcd8739ae039), {
                    data: weatherData
                })
            ]
        })
    });
};
var $889bfb1e3e9bfc80$export$2e2bcd8739ae039 = $889bfb1e3e9bfc80$var$Body;


const $84a264530b3fb4fb$var$root = (0, $2A20x$reactdomclient.createRoot)(document.getElementById("root"));
const $84a264530b3fb4fb$var$AppLayout = ()=>{
    return /*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {});
};
$84a264530b3fb4fb$var$root.render(/*#__PURE__*/ (0, $2A20x$reactjsxruntime.jsx)($84a264530b3fb4fb$var$AppLayout, {}));


//# sourceMappingURL=index.js.map
