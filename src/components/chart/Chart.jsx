

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Delivery Time", "Charge"];

const TABLE_ROWS = [
 { name: "1 hr", job: "150 ₹" },
  { name: "2 hr", job: "125 ₹" },
  { name: "4 hr", job: "75 ₹" },
  { name: "12 hr", job: "50 ₹" },
  { name: "24 hr", job: "25 ₹" },
  { name: "45 hr", job: "10 ₹" },
];

export function Chart() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-85">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-pink-500 p-4"
                >
                  <Typography
                    variant="small"
                    className="font-normal leading-none opacity-70 text-white font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job }, index) => {
              const isLast = index === TABLE_ROWS.length;
              const classes = isLast
                ? "p-3"
                : "p-3 border-b border-blue-gray-50 bg-pink-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="font-normal">
                      {job}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
