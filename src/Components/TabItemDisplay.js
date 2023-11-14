import AboutTab from "./AboutTab/About"
import HomeTab from "./HomeTab/Home"
import LayersTab from "./LayersTab/Layers"
import LegendTab from "./LegendTab/Legend"

const TabItemDisplay = ({ value }) => {

    switch (value) {
        case "Home":
            return <HomeTab />
        case "About":
            return <AboutTab />
        case "Layers":
            return <LayersTab />
        case "Legend":
            return <LegendTab />
        default:
            return <>default</>
    }
}

export default TabItemDisplay