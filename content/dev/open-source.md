---
title: Open Source Mods
---

<!--
To add a mod to these lists:
1. Add the mod name to the appropriate list in data/open_source_categories.yaml.
2. Update the OpenSourceMods.json file in the data folder.
   The file can be generated from the Thunderstore API:
   https://thunderstore.io/c/v-rising/api/v1/package/
-->

{{- $allMods := site.Data.OpenSourceMods -}}
{{- $categories := site.Data.open_source_categories -}}
{{- $serverMods := $categories.serverMods -}}
{{- $clientMods := $categories.clientMods -}}
{{- $frameworkMods := $categories.frameworkMods -}}

{{- $scratch := newScratch -}}
{{- range $allMods }}
    {{- if and (in $serverMods .name) (ne .is_deprecated true) }}
        {{- $scratch.Add "server" (slice .) -}}
    {{- end }}
    {{- if and (in $clientMods .name) (ne .is_deprecated true) }}
        {{- $scratch.Add "client" (slice .) -}}
    {{- end }}
    {{- if and (in $frameworkMods .name) (ne .is_deprecated true) }}
        {{- $scratch.Add "framework" (slice .) -}}
    {{- end }}
{{- end }}

{{- $serverModsData := sort ($scratch.Get "server") "date_updated" "desc" -}}
{{- $clientModsData := sort ($scratch.Get "client") "date_updated" "desc" -}}
{{- $frameworkModsData := sort ($scratch.Get "framework") "date_updated" "desc" -}}

<h1>Server Mods</h1>

<table>
  <tr>
    <th>Mod Name</th>
    <th>Description</th>
    <th>Author</th>
  </tr>
  {{- range $serverModsData }}
    {{- $latest := index .versions 0 -}}
    <tr>
      <td><a href="{{ $latest.website_url }}">{{ .name }}</a></td>
      <td>{{ $latest.description }}</td>
      <td><a href="https://thunderstore.io/c/v-rising/p/{{ .owner }}">{{ .owner }}</a></td>
    </tr>
  {{- end }}
</table>

<h1>Client Mods</h1>
<table>
  <tr>
    <th>Mod Name</th>
    <th>Description</th>
    <th>Author</th>
  </tr>
  {{- range $clientModsData }}
    {{- $latest := index .versions 0 -}}
    <tr>
      <td><a href="{{ $latest.website_url }}">{{ .name }}</a></td>
      <td>{{ $latest.description }}</td>
      <td><a href="https://thunderstore.io/c/v-rising/p/{{ .owner }}">{{ .owner }}</a></td>
    </tr>
  {{- end }}
</table>

<h1>Frameworks</h1>
<table>
  <tr>
    <th>Mod Name</th>
    <th>Description</th>
    <th>Author</th>
  </tr>
  {{- range $frameworkModsData }}
    {{- $latest := index .versions 0 -}}
    <tr>
      <td><a href="{{ $latest.website_url }}">{{ .name }}</a></td>
      <td>{{ $latest.description }}</td>
      <td><a href="https://thunderstore.io/c/v-rising/p/{{ .owner }}">{{ .owner }}</a></td>
    </tr>
  {{- end }}
</table>
