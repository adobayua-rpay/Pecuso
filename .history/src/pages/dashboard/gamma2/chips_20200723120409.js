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

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Social Capital' },
    { key: 1, label: 'Environmental' },
    { key: 2, label: 'Impact' },
    { key: 3, label: 'Capitalist' },
    { key: 4, label: 'Penny Stock' },
    { key: 5, label: 'Divident' },
    { key: 6, label: 'Carbon Neutral' },
    { key: 7, label: 'U.S.A Production' },
    { key: 8, label: 'LGBTQ' },
    { key: 9, label: 'Minority Led' },
    { key: 9, label: 'Female Led' },





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
