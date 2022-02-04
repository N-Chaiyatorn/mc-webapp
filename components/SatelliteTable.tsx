import React, { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import useSocket from "../hooks/useSocket";
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";

function SatelliteTable() {
  const { data, isLoading, isError, setUrl } = useFetch(
    "http://localhost:3165/satellites"
  );

  const { linkStatus, latestData, setLinkUri } = useSocket();

  return (
    <div className="flex-col py-5 px-10 items-center text-lg text-gray-200">
      {isError && <div>Error fetching space system metadata ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <table className="w-full my-auto text-left text-sm lg:text-base border-separate table-spacing">
          <thead className="text-base lg:text-lg">
            <tr>
              <th className="font-normal">Satellite ID</th>
              <th className="font-normal">Satellite Name</th>
              <th className="font-normal">Description</th>
              <th className="font-normal">Link Status</th>
              <th className="font-normal">Latest Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((_) => (
              <tr key={_.satelliteId} className="h-4 hover:bg-gray-700">
                <td key={_.satelliteId + _.satelliteId} className="h-10">
                  {_.satelliteId}
                </td>
                <td key={_.satelliteId + _.satelliteName}>{_.satelliteName}</td>
                <td key={_.satelliteId + _.description}>{_.description}</td>
                <td>
                  <div className="flex items-center">
                    {linkStatus === "Up" ? (
                      <HiStatusOnline className="text-green-700" />
                    ) : (
                      <HiStatusOffline className="text-red-700" />
                    )}
                    <div className="ml-[5px]">{linkStatus}</div>
                  </div>
                </td>
                <td>{latestData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SatelliteTable;
