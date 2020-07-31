import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const handleClick = () => {
    console.info('You clicked the Chip.');
  };

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: "social", label: 'Social Capital' },
    { key: "environmental", label: 'Environmental' },
    { key: "impact", label: 'Impact' },
    { key: "capitalist", label: 'Capitalist' },
    { key: "penny", label: 'Penny Stock' },
    { key: "dividend", label: 'Dividend' },
    { key: "technology", label: 'Tech' },
    { key: "industrialist", label: 'Industrialist' },
    { key: "carbon", label: 'Carbon Neutral' },
    { key: "usa", label: 'U.S.A Production' },
    { key: "lgbtq", label: 'LGBTQ' },
    { key: "minority", label: 'Minority Led' },
    { key: "female", label: 'Female Led' },





  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onClick={handleClick}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
