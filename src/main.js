import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Moritz Bogs',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Automation, fast feedback, Fun building pipelines.'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins and Gitlab CI. Previously also Tekton+ArgoCD as well as AWS CodePipeline in an internal project.',
		// What do you want to learn in this workshop? 
		expectations: [
			'A lot of interesting questions :)'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play chess', 
			'hiking',
			'baking'
		]
	}
});
