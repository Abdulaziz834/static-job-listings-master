import { Job } from "./Job"

export function Jobs({data, addTag}) {

  return (
      <main className="job-container">
        {data ? data.map((job) => (
          <Job job={job} key={job.id} addTag={addTag}></Job>
        )) : "Loading..."}
      </main>
  )
}