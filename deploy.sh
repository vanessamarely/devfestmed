#!/usr/bin/env bash

echo "Generando build"
ng build --prod
echo "Enviando a Firebase"
firebase deploy --only hosting
