#global module:false
module.exports = (grunt) ->

	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-contrib-jshint"
	grunt.loadNpmTasks "grunt-contrib-watch"
	grunt.loadNpmTasks "grunt-contrib-clean"
	grunt.loadNpmTasks "grunt-contrib-copy"
	grunt.loadNpmTasks "grunt-contrib-less"
	grunt.loadNpmTasks "grunt-ember-templates"
	grunt.loadNpmTasks "grunt-script-include"
	grunt.loadNpmTasks "grunt-import"

	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> -
			<%= grunt.template.today("yyyy-mm-dd") %>\n
			<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>
			* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;
			Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		coffee:
			srcs:
				expand: true
				src: ['app/**/*.coffee']
				dest: 'dist/js/'
				ext: '.js'

		less:
			dev:
				files:
					'dist/css/style.css' : 'less/**/*.less'

		# not used in stask. Use if you modify dist/ js files
		jshint:
			app:
				src: ['dist/js/**/*.js']
			options:
				curly: true
				eqeqeq: true
				immed: true
				latedef: true
				newcap: true
				noarg: true
				sub: true
				undef: true
				unused: true
				boss: true
				eqnull: true
				browser: true
				globals:
					jQuery: true
					$: true
					Ember: true
					Em: true
					window: true
					alert: true
					App: true

		emberTemplates:
			compile:
				options:
					templateBasePath: 'templates/'
				files:
					'dist/js/templates.js' : ['templates/**/*.hbs']

		include:
			dev:
				options:
					include: 'tmp/scripts.html'
				files: [
					expand: true
					cwd: 'dist/js'
					src: ['**/*.js']
					dest:'js/'
				]

		import:
			dev:
				src: 'index_import.html'
				dest:'dist/index.html'

		clean:
			dist: ['dist/']
			buggyInclude: ['js/'] # `include` task creates a js/ folder to build paths properly

		copy:
			main:
				expand: true
				src: 'vendor/**/*'
				dest:'dist/'

		watch:
			gruntfile:
				files: 'Gruntfile.coffee'
				tasks: ['default']
			dev:
				files: ['app/**/*.coffee']
				tasks: ['clean','coffee','include','import','clean:buggyInclude']
			templates:
				files: ['templates/**/*.hbs']
				tasks: ['emberTemplates']
			less:
				files: ['less/**/*.less']
				tasks: ['less']

	grunt.registerTask 'default', ['clean','coffee','less','emberTemplates','include','import', 'copy','clean:buggyInclude','watch']