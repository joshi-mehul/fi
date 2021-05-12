import { Grid } from "@material-ui/core";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { format } from "date-fns";
import { useStyle } from "./App.style";
import { Overlay, DetailedForcastCard } from "./components";
import { ForcastCard } from "./components/ForcastCard";

const data = [
  {
    id: "1",
    title: "US GDP",
    question: "What will US GDP growth be in 2021?",
    dueDate: 1620574534,
    forcastCount: 2110,
    forcastProbability: 80,
    positive: true
  },
  {
    id: "2",
    title: "Australia CPI",
    question: "What will Australian core inflation be for Q1 2022?",
    dueDate: 1620574534,
    forcastCount: 23,
    forcastProbability: 80,
    positive: false
  },
  {
    id: "3",
    title: "NSW Business Confidence",
    question:
      "Will New South Wales business confidence improve or fall in 2021?",
    dueDate: 1620574534,
    forcastCount: 380,
    forcastProbability: 80,
    positive: true
  }
];

export const App = () => {
  const [select, setSelect] = useState(null);
  const classes = useStyle();
  return (
    <div className={classes.app}>
      <Grid justify="space-between" container spacing={3}>
        <AnimateSharedLayout type="crossfade">
          {data.map((dataItem) => (
            <>
              <ForcastCard
                id={dataItem.id}
                onClick={setSelect}
                key={dataItem.id}
                title={dataItem.title}
                question={dataItem.question}
              />
              {select !== null && <Overlay isSelected />}
              <AnimatePresence>
                {select === dataItem.id && (
                  <DetailedForcastCard
                    id={dataItem.id}
                    onClick={setSelect}
                    key={dataItem.id}
                    title={dataItem.title}
                    question={dataItem.question}
                    dueDate={format(new Date(dataItem.dueDate), "dd MMM,yyyy")}
                    forcastCount={dataItem.forcastCount}
                    forcastProbability={dataItem.forcastProbability}
                    positive={dataItem.positive}
                  />
                )}
              </AnimatePresence>
            </>
          ))}
        </AnimateSharedLayout>
      </Grid>
    </div>
  );
};
