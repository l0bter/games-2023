<script>
    export let data
</script>

<h2>{data.metadata.title}</h2>

<iframe src={data.gamePath} title={data.metadata.title} width=720 height=405 /> 

<a href={data.gamePath} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Full Game...</a>