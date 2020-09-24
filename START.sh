# gcloud builds submit --tag eu.gcr.io/personal-site-283305/propertyapi
###################################
# ASSIGN VARS
BASEDIR=$(dirname $0)
ATOM="/Applications/Atom.app/Contents/Resources/app/atom.sh"
VSCODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"

###################################
# LAUNCH ATOM
#cd ${BASEDIR}
# ${ATOM} .

###################################
# LAUNCH VSCODE
cd ${BASEDIR}
"${VSCODE}" .

###################################
# OPEN A TERMINAL IN FOLDER
osascript <<EOD
	tell application "Terminal"
		do script "cd \"$BASEDIR\""
	end tell
EOD

osascript <<EOD
	tell application "Terminal"
		do script "cd \"$BASEDIR\";npm start"
	end tell
EOD
