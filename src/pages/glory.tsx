import React from 'react';
import Layout from '@theme/Layout';
import gloryData from '../data/glory.data';
import type { GloryRecord } from '../data/glory.data';

function groupByYear(records: GloryRecord[]) {
  const groups: { year: string; items: GloryRecord[] }[] = [];
  const seen: Record<string, number> = {};

  for (const record of records) {
    if (seen[record.year] === undefined) {
      seen[record.year] = groups.length;
      groups.push({ year: record.year, items: [] });
    }
    groups[seen[record.year]].items.push(record);
  }
  return groups;
}

export default function GloryPage() {
  const yearGroups = groupByYear(gloryData);

  return (
    <Layout title="荣誉与奖项" description="GUETSEC 历年荣誉与奖项展示">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>荣誉与奖项</h1>
          <p>GUETSEC 历年荣誉与奖项展示</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <table>
            <thead>
              <tr>
                <th>年份</th>
                <th>赛事</th>
                <th>名次</th>
              </tr>
            </thead>
            <tbody>
              {yearGroups.map((group) => (
                <React.Fragment key={group.year}>
                  {group.items.map((item, idx) => (
                    <tr key={`${group.year}-${idx}`}>
                      {idx === 0 && (
                        <th scope="row" rowSpan={group.items.length}>
                          {group.year}
                        </th>
                      )}
                      <td>{item.competition}</td>
                      <td>{item.award}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
