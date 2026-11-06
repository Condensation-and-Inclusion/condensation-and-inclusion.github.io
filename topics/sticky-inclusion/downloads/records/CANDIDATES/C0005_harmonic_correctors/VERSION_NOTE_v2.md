# C0005 version and provenance record — v2

Status: **candidate; administrative provenance record**. The canonical tuple intended for its first verification submission is CONTRACT_v2.md, PROOF_v2.md, BRIEF_v2.md, and AUTHOR_INPUTS_v2.md. No v1 audit has run, and no v1 verification or promotion is claimed. This record candidly documents a pre-audit versioning failure; it does not retroactively make the earlier overwrites compliant.

## What was overwritten, and what is preserved

The author first created CONTRACT_v1.md and PROOF_v1.md, then changed their written mathematical text in place. The author treated this as pre-freeze drafting, but the campaign's immutable-version rule required a new version once the written definition changed. In particular, the first contract's event count said “before that entrance”; the edited contract includes an entrance-causing independent jump. The current v1 bytes are therefore not the unchanged first-created bytes.

Every existing file has been preserved since the root's explicit no-further-overwrite instruction. The current v1 tuple remains available with the following hashes:

| Existing file | SHA256 |
|---|---|
| CONTRACT_v1.md | 4fa850e20b2eec486404aefec1c003968544460fc83721a796fd5037cd4aa7bc |
| PROOF_v1.md | 371c63744240b5b878fc7d9a7f656f953300f23cbb51bd710d3d2dab6fbfd90e |
| BRIEF_v1.md | 86963226ce3ec177f4a6a20b21bdea6d2770dea107a79e85b9fd5b9bb2ffc351 |
| AUTHOR_INPUTS_v1.md | 55d8c34dd69c4366b8eb64037e032e36bb1d2ee2cb0921dd466082637c07c53d |

The files named CONTRACT_initial_written_draft.md and PROOF_initial_written_draft.md are **reconstructions from the recorded patch**, not untouched originals. After the overwrite, the author recovered their text by applying the exact inverse of the five recorded substitutions to the current contract and proof. Their hashes were computed after recovery, not pinned at the original creation time. The recorded initial creation patch and the inverse patch are the provenance for this reconstruction. The recovery operation wrote new files and did not change the current v1 files.

| Reconstructed earlier text; not an untouched original | SHA256 |
|---|---|
| CONTRACT_initial_written_draft.md | 27c16421ccd86d057f687b8100676c27cc603dc9d6212031649b56e8f2617970 |
| PROOF_initial_written_draft.md | 9663f84e7fcf6002a351e1fbce9e3c1ce42d6b97c4846bae90383509a16520d7 |

## Exact ordered event record

1. The author read only the five authorized external files, recorded in AUTHOR_INPUTS_v2.md, and wrote the initial CONTRACT_v1.md and PROOF_v1.md through two creation patches. No brief or input-manifest file yet existed for those initial bytes.
2. The root sent an administrative reminder about literal backslashes, balanced delimiters, explicit definitions, and definition-only hints; it supplied no mathematical source or premise. The author also read the written contract with a text-search command.
3. The author overwrote three contract passages: the symmetry map was defined on the real ambient space while preserving the lattice; only the absorption difference was said to have zero boundary values; and the event count was changed from “before that entrance” to include the entrance-causing independent jump. Two proof passages were changed correspondingly: the restart paragraph explicitly counted a terminal independent event, and the author-change paragraph explained why it must be counted. Those are exactly the five substitutions inverted in the recovery script.
4. The author sent the root a message disclosing the inclusive terminal-event convention and the other explicit quantitative details. The text-only finalization script checked the five unchanged source hashes and the current contract/proof delimiters, then generated BRIEF_v1.md and AUTHOR_INPUTS_v1.md. Consequently the preserved v1 brief embeds the edited current v1 contract, not the earlier reconstructed contract.
5. After that operation, the root stated that it had already read the written CONTRACT_v1.md and PROOF_v1.md, required preservation of the bytes, and instructed that a changed mathematical event-count definition use v2. This is author/root exposure, not an independent verification. The message did not pin the hashes of the particular bytes read; this record does not invent a more precise exposure hash or time.
6. The author replied candidly that the three contract and two proof clarifications had already been made, reported all four current v1 hashes, and promised no further mathematical overwrite. The author ran the text-only inverse-patch recovery script, creating the two recovered draft files with the hashes above.
7. The root then explicitly classified the overwrite as a pre-audit versioning failure, required that recovered text be labelled reconstructed, and requested a new canonical v2 contract, proof, exact-contract brief, complete input manifest, and this provenance record. It specified counting on ((0,	au_d]), with zero events when the initiating-step state is already in (S_n). The root stated that no v1 audit had run and that v2 would be the first tuple submitted for verification.
8. The author acknowledged those requirements and created the five new v2 files without overwriting any existing file. All source and preserved-file hashes were rechecked. The v2 brief embeds its exact v2 contract, and the contract/proof explicitly state the inclusive excursion-clock interval.

No independent verifier read a C0005 candidate during this author assignment. No audit, reconstruction, registry, or other-route content was supplied through these messages.

## Mathematical distinction in the event count

The canonical count is the number of independent events on ((0,	au_d]) after the initiating step. Its value is zero if that step already reaches (S_n). In particular the entrance jump is counted if it is independent. This convention is needed both in the visited-site displacement count and in the implication that (J=0) leaves the perturbed excursion identical to pure interaction.

The literal exclusion of a terminal event can fail already with two labels. Start from a full stack at zero and let the initiating step produce the adjacent tuple ((0,1)). The next independent jump of the label at zero to minus one has positive rate (d), can occur before any interaction jump, and reaches the stable tuple ((-1,1)). If that terminal jump were excluded, the count would be zero. Pure interaction from ((0,1)) absorbs at a full stack at either zero or one, so its endpoint is different. This identifies a defect in the earlier C0005 wording; it is not a claim that the source C0004's unspecified endpoint convention used the defective interpretation.

The two other contract clarifications make the stated objects well typed: a symmetry acts on the real domain of (f) and preserves the lattice, and the zero-boundary assertion applies to (P_db-Pb), not to a trace-generator difference defined on the boundary itself. The current v1 already contains these clarifications; v2 preserves them and makes the inclusive time interval literal. The rest of the mathematical argument is unchanged from the preserved current v1 proof, apart from version references and that explicit event-count interval. All claims remain candidate.

## Canonical mathematical and brief files

| Canonical file | SHA256 |
|---|---|
| CONTRACT_v2.md | 0a0130d01e482dbe546a19248b1ca67180aa373643dace7a87abc5cff8eb8cec |
| PROOF_v2.md | 68a9fec530428b3fd61e9f3bef1564e3ad3bcbd905d0cf0b51801a58bd6fc5ef |
| BRIEF_v2.md | 35a10be2298890820aeeb7ab72d47e3a0602f9ea7907cbd20666648353ed4e5b |

The final digests of this record and AUTHOR_INPUTS_v2.md are returned to the root; neither document contains a self-referential digest.
