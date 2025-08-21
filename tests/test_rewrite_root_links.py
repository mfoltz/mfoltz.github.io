import sys
from pathlib import Path

import pytest

sys.path.append(str(Path(__file__).resolve().parents[1] / "scripts"))
from rewrite_root_links import rewrite_links, rewrite_shortcodes


def test_rewrites_to_md():
    src = "See [link](/foo/bar)"
    expected = 'See [link]({{% relref "foo/bar.md" %}})'
    assert rewrite_links(src) == expected


def test_rewrites_to_md_and_preserves_anchor():
    src = "See [link](/foo/bar#section)"
    expected = 'See [link]({{% relref "foo/bar.md#section" %}})'
    assert rewrite_links(src) == expected


def test_rewrites_trailing_slash_to_index():
    src = "See [dir](/foo/bar/)"
    expected = 'See [dir]({{% relref "foo/bar/_index.md" %}})'
    assert rewrite_links(src) == expected


def test_rewrites_trailing_slash_to_index_and_preserves_anchor():
    src = "See [dir](/foo/bar/#section)"
    expected = 'See [dir]({{% relref "foo/bar/_index.md#section" %}})'
    assert rewrite_links(src) == expected


def test_rewrites_shortcode_in_link():
    src = '[home]{{< relref "foo/bar" >}}'
    expected = '[home]({{% relref "foo/bar.md" %}})'
    assert rewrite_shortcodes(src) == expected


def test_rewrites_bare_shortcode():
    src = '{{< relref "/foo/bar/" >}}'
    expected = '{{% relref "foo/bar/_index.md" %}}'
    assert rewrite_shortcodes(src) == expected


def test_rewrites_ref_shortcode():
    src = '{{< ref "foo/bar" >}}'
    expected = '{{% relref "foo/bar.md" %}}'
    assert rewrite_shortcodes(src) == expected


def test_rewrite_links_idempotent():
    src = "See [link](/foo/bar)"
    once = rewrite_links(src)
    twice = rewrite_links(once)
    assert twice == once
