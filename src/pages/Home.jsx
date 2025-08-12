// inside Home.jsx render area
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {movies.map(m => <MovieCard key={m.imdbID} movie={m} />)}
</div>
